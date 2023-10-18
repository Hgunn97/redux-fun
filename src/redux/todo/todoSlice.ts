import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import http from "../../api/axios-setup"
import {ITask} from "../types/Task";

interface TodoState {
    tasks: ITask[];
}

const initialState: TodoState = {
    tasks: []
};

export const retrieveTodos = createAsyncThunk(
    "/todos/fetchTodos",
    async(_, thunkAPI) => {
        try {
            const res = await http.get("/todos")
            return res.data.todos;
        } catch (e) {
            return thunkAPI.rejectWithValue((e));
        }

    }
)

export const createTodo = createAsyncThunk(
    "/todos/createTodo",
    async (text: string, thunkAPI) => {
        try {
            const response = await http.post("/todos", { text });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const deleteTodo = createAsyncThunk(
    "/todos/deleteTodo",
    async (id: string, thunkAPI) => {
        try {
            const response = await http.delete("/todo/" + id);
            return response.data
        }catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(retrieveTodos.pending, (state: any) => {
            state.isLoading = true;
        })
            .addCase(retrieveTodos.fulfilled, (state: any, action: any) => {
            state.isLoading = false;
            state.error = false;
            state.tasks = action.payload;
        })
            .addCase(retrieveTodos.rejected, (state: any, action: any) => {
            state.isLoading = false;
            state.error = true;
        })
            .addCase(createTodo.fulfilled, (state: any, action) => {
            state.tasks.push(action.payload.todo);
        })
            .addCase(createTodo.rejected,(state: any, action) => {
            state.isLoading = false;
            state.error = true
        })
            .addCase(deleteTodo.fulfilled,(state: any, action: any) => {
            state.tasks = state.tasks.filter((task: ITask) => task.id !== action.payload.toString())
        });
    }
});

export default todoSlice.reducer;