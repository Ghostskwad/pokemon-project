# require 'rest-client'

# rm = RestClient.get 'https://pokeapi.co/api/v2/pokemon?limit=386'
# rm_array = JSON.parse(rm)['results']
# rm_array.each do |url|
#     # byebug
#     pokemon = RestClient.get url["url"]
#     # byebug
#     poke = JSON.parse(pokemon)
#     poke.each do |pokemon|
#         byebug
#         Pokemon.create(
#             name: pokemon["ability"],
#             # game_index: pokemon["id"],
#             # height: pokemon["height"],
#             # weight: pokemon["weight"],
#             # base_experience: pokemon["base_experience"]
#         )
#     end
# end
# pokemon_array = JSON.parse(rm_array)['results']
# byebug


User.create(username: "Quade", password: "1234")

Type.create(name: "normal")
Type.create(name: "fighting")
Type.create(name: "flying")
Type.create(name: "poison")
Type.create(name: "ground")
Type.create(name: "rock")
Type.create(name: "bug")
Type.create(name: "ghost")
Type.create(name: "steel")
Type.create(name: "fire")
Type.create(name: "water")
Type.create(name: "grass")
Type.create(name: "electric")
Type.create(name: "psychic")
Type.create(name: "ice")
Type.create(name: "dragon")
Type.create(name: "dark")
Type.create(name: "fairy")

StatName.create(name: "hp")
StatName.create(name: "attack")
StatName.create(name: "defense")
StatName.create(name: "special-attack")
StatName.create(name: "special-defense")
StatName.create(name: "speed")
