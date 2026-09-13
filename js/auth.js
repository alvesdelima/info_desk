const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    console.log("Tentando login:", email);

    const button = loginForm.querySelector(".login-button");

    const buttonText = button.querySelector("span");

    button.disabled = true;
    buttonText.textContent = "Entrando...";

    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.error("ERRO SUPABASE:", error);

      alert("Erro ao entrar:\n\n" + error.message);

      button.disabled = false;
      buttonText.textContent = "Entrar";

      return;
    }

    console.log("LOGIN REALIZADO!");
    console.log("Usuário:", data.user);
    console.log("Sessão:", data.session);

    window.location.replace("dashboard.html");
  });
}
