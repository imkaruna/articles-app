# frozen_string_literal: true

class ArticlesController < ApplicationController
  layout "articles"

  def index
    @articles = Article.all
    @component = {:articles => @articles.to_json(except: [:author_id], include: [{ author: {only: [:id, :name] }},  tags: {only: [:id, :name] }] )}
  end
end
