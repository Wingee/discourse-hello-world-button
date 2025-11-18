# frozen_string_literal: true
# name: discourse-hello-world-button
# about: Big red HELLO WORLD button
# version: 1.0
# authors: engwei + Grok
# url:  https://github.com/Wingee/discourse-hello-world-button

# register stylesheet (optional; SCSS under assets/stylesheets will be processed)
register_asset "stylesheets/hello-world.scss"

# NOTE: Do NOT register JS files under assets/javascripts.
# Those are auto-included by Discourse's bundler. Registering them manually
# causes boot failures (as you saw).