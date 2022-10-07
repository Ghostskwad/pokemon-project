class User < ApplicationRecord
has_and_belongs_to_many :pokemons, join_table: 'user_pokemons'

has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
end
