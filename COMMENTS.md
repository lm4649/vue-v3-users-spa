### Write a short paragraph about what approach you would choose to make your VueJS child components communicate to each other directly in a more complex application.

---

<br>

 I would use a state management solution like Pinia as it:
- provides a centralized store for managing the state of the application,
- makes it easy to track the flow of data throughout the application,
- it allows avoid using event bus or emit events to have the components communicate each other

<br>

### Please provide some feedback on what improvements you would make or alternative approach you would take if given more time, and any difficulties you might have encountered during the process.

---

<br>

With more time I would have added additional features :

> general:
- add a login and role/permission system
- provide tests for all components

> list of user profiles:
- propose an alternative visual where the profiles would be presented as a map. The visual would use a responsive css grid
- retrieve data from an API or a Firebase type database
- add pagination or infinite scrolling
- add CRUD actions for admin for instance (e.g.: dashboard view)
- add export to CSV or PDF (e.g.: dashboard view)

> user detailed profile:
- for an app like social network, possibility of liking a profile
- possibility for the user to edit his profile


I did not encounter any major difficulties in carrying out the exercise.
