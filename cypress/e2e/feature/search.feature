# Feature: Login aplikasi

#     As a valid user
#     I want to login into aplication

#     Scenario: valid lofin page
#     Given i Open Login page
#     When i submit login
#     Then i Should see homepage

Feature: Search keyword on search bar
    As a valid user
    I want to search the data based on my keyword on the application

    Scenario: Search Valid Data
        Given I on Zero Bank home page
        When I am fill search text box with "online" keywords and Enter 
        Then I should a list that match with my keywords