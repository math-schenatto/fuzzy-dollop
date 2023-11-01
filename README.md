# App

Gympass style app.

## RFs (Requisitos funcionais)

- [x] User can sign up
- [] User can sign in
- [] Must be possible see logged user profile
- [] Must be possible look the total number of the user's check-ins
- [] Must be possible to look check-ins history
- [] Must be possible to search for near gyms
- [] Must be possible to search gyms by name
- [] Must be possible to check-in at a gym
- [] Must be possible to validate user login

# RNs (Regras de Negócio)

- [x] User cant't register with duplicated e-mail
- [] User cant't check-in twice a day
- [] User cant't check-in far from the gym (100m)
- [] Check-in must be validate 20 minutes after its creation
- [] Check-in must be validate only by admins
- [] Gym only can be registered by admins

# RNFs (Requisitos não funcionais)

- [x] Password must be encrypted
- [x] Data stored in PostgresSQL
- [] Pagination of 20 items by page
- [] JWT
