import { withPluginApi } from "discourse/lib/plugin-api";

export default {
    name: "hello-world-button",

    initialize() {
        withPluginApi("1.8.0", api => {

            // Extend the Topic Footer Buttons component
            api.modifyClass("component:topic-footer-buttons", {
                pluginId: "hello-world-button",

                didInsertElement() {
                    // Create a button element using helper
                    const button = this.container.lookup("service:site")._container.ownerDocument.createElement("button");
                    button.className = "hello-world-button";
                    button.innerText = "HELLO WORLD";
                    button.onclick = () => alert("HELLO WORLD FROM ENGWEI! 🎉");

                    // Append it to the footer
                    this.element.appendChild(button);
                }
            });

        });

        console.log("HELLO WORLD PLUGIN INITIALIZER RUNNING");
    }
};
