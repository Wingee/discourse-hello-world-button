import { withPluginApi } from "discourse/lib/plugin-api";

export default {
    name: "hello-world-button",

    initialize() {
        withPluginApi("1.8.0", api => {

            // This is the new supported way for topic-footer-buttons
            api.decorateWidget("topic-footer-buttons:after", helper => {
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

        });

        console.log("HELLO WORLD PLUGIN INITIALIZER RUNNING");
    }
};
