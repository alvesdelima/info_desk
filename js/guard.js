(async function () {
  const { data, error } = await supabaseClient.auth.getUser();

  // Não existe usuário autenticado
  if (error || !data.user) {
    window.location.replace("index.html");

    return;
  }

  // Usuário autenticado
  console.log("Acesso autorizado:", data.user.email);
})();
