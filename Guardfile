# LiveReload installation
#
# 1. Add the guard-livereload gem to your Gemfile OR uncomment the line:
#
#   gem 'guard-livereload'
#
# 2. Install the gem on your machine
#
#   bundle install
#
# 3. Launch Guard
#
#   bundle exec guard
#

guard 'livereload' do
  watch(%r{app/content_types/.+\.yml$})
  watch(%r{app/views/.+\.liquid})
  watch(%r{config/.+\.yml$})
  watch(%r{data/.+\.yml$})
  watch(%r{public/((stylesheets|javascripts)/(.+\.(css|js))).*}) { |m| "/#{m[1]}" }
end
