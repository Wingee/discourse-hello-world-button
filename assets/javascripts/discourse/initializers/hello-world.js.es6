import { withPluginApi } from "discourse/lib/plugin-api";

export default {
    name: "hello-world-button",

    initialize() {
        withPluginApi("1.8.0", api => {

            // New style: add a button to topic-footer-buttons
            api.addActionToWidget("topic-footer-buttons", "helloWorldButton", {
                button: true,
                className: "hello-world-button",
                icon: "exclamation-triangle",
                text: "HELLO WORLD",
                action() {
                    alert("HELLO WORLD FROM ENGWEI! 🎉");
                }
            });

        });

        console.log("HELLO WORLD PLUGIN INITIALIZER RUNNING (new API)");
    }
};
