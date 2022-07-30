import { NFT_prepare_backend } from "../../declarations/NFT_prepare_backend";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await NFT_prepare_backend.greet(name);

  console.log(123);
  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});
