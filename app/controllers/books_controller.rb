class BooksController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]
  def create
    book = Book.new(book_params)

    if book.save
      render json: book
    else
      render json: { errors: book.errors.full_messages }
    end
  end

  def index
    @books = Book.all
    render json: @books
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy
  end

  private

  def book_params
    params.require(:book).permit(:title, :author_name, :cover_i, :first_publish_year, :key, :id_amazon, :subject, :ratings_average)
  end
end