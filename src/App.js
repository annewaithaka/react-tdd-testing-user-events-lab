function App() {
  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" />
        <br />
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" />
        <br />
        <label>
          <input name="pepperoni" type="checkbox" />
          Add Pepperoni
        </label>
        <br />
        <label>
          <input name="mushrooms" type="checkbox" />
          Add Mushrooms
        </label>
        <br />
        <label>
          <input name="onions" type="checkbox" />
          Add Onions
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
