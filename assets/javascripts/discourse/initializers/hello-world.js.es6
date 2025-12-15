import { withPluginApi } from "discourse/lib/plugin-api";

export default {
    name: "hello-world-button",

    initialize() {
        withPluginApi("1.8.0", api => {

            // Add a new widget
            api.addWidget("hello-world-button", helper => {
                return helper.h(
                    "button.hello-world-button",
                    {
                        onclick() {
                            alert("HELLO WORLD FROM ENGWEI! 🎉");
                        }
                    },
                    "HELLO WORLD"
                );
            });

            // Attach it to topic footer
            api.modifyClass("component:topic-footer-buttons", {
                pluginId: "hello-world-button",
                didInsertElement() {
                    this.addChild("hello-world-button");
                }
            });

        });

        console.log("HELLO WORLD PLUGIN INITIALIZER RUNNING");
    }
};
