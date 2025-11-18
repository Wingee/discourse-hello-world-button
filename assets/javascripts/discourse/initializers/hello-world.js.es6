import { withPluginApi } from "discourse/lib/plugin-api";

export default {
    name: "hello-world-button",
    initialize() {
        withPluginApi("1.8.0", api => {
            api.decorateWidget('topic-footer-buttons:after', helper => {
                return helper.h('button.hello-world-button', {
                    onclick: () => alert('HELLO WORLD! 🎉')
                }, 'HELLO WORLD');
            });
        });

        console.log("HELLO WORLD PLUGIN INITIALIZER RUNNING");
    }
};
