import { withPluginApi } from "discourse/lib/plugin-api";

function initHello(api) {
    api.addToolbarPopupMenuOptionsCallback(() => {
        return {
            action: "helloWorld",
            icon: "exclamation-triangle",
            label: "hello_world.title"
        };
    });

    api.modifyClass("controller:topic", {
        pluginId: "hello-world-button",
        actions: {
            helloWorld() {
                alert("HELLO WORLD FROM ENGWEI! 🎉");
            }
        }
    });
}

export default {
    name: "hello-world-button",
    initialize() {
        withPluginApi("1.8.0", initHello);
    }
};

console.log("HELLO WORLD PLUGIN INITIALIZER RUNNING");