# frozen_string_literal: true

class ArticlesController < ApplicationController
  layout "articles"

  def index
    @hello_world_props = { name: "Stranger" }
    render layout: "articles"
  end
end
