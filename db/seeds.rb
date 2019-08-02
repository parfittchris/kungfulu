# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

description1 = "When a Chinese rebel murders Chon's estranged father and escapes to England, Chon and Roy make their way to London with revenge on their minds."

User.destroy_all
Movie.destroy_all


ActiveRecord::Base.connection.reset_pk_sequence!('movies')

u1 = User.create!(email: 'demoUser', password: 'password');
u2 = User.create!(email: 'chris_the_great@gmail.com', password: '123456');
u3 = User.create!(email: 'theDressIsBlue@hotmail.com', password: 'password');

m1 = Movie.create!(title: "Shanghai Knights", year: 2003, rating: 6.2, description: description1, video_url:"www.com")