# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-paperwiki"
  spec.version       = "0.1.20"
  spec.authors       = ["pomeloshark"]

  spec.summary       = "A Jekyll theme meant for use as a personal wiki."
  spec.homepage      = "https://github.com/pomeloshark/jekyll-theme-paperwiki"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|_data|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll"
end
