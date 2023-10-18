import {Server, Model} from "miragejs"


export const makeServer = () => {

    new Server({
        models: {
            todo: Model,
        },

        seeds(server) {
            server.create("todo", {text: "Learn redux"});
            server.create("todo", {text: "Learn react"});
            server.create("todo", {text: "Learn whatever"});
        },

        routes() {
            this.namespace = "api";

            this.urlPrefix = "http://localhost:3000"

            this.get("/todos", schema => {
                return schema.todos.all()
            })

            this.post("/todos", (schema, request) => {
                console.log(request.requestBody);
                let attrs = JSON.parse((request.requestBody))

                return schema.todos.create(attrs);
            })

            this.delete("/todo/:id", (schema, request) => {
                let id = request.params.id

                schema.todos.find(id).destroy()
                return id;
            })
        },
    })
}