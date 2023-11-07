<script>
  import LoginComponent from '../../../components/LoginComponent.svelte';
</script>

<LoginComponent />
<!-- <main>
  <form on:submit|preventDefault={onSubmit}>
    <div>
        <label for="name">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value=""
        />
    </div>
    <div>
      <label for="name">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value=""
      />
  </div>
    <button type="submit">Submit</button>
  </form>
</main>

<script lang="js">
  function onSubmit(e) {
    const formData = new FormData(e.target);

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    console.log(data)
  }
</script>

<style>
   * {
      box-sizing: border-box;
    }
    form {
      display: flex;
      flex-direction: column;
      width: 300px;
    }

    form > div{
      display: flex;
      justify-content: space-between;
    }

    form > div + * {
      margin-top: 10px;
    }
</style> -->