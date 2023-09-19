function onChange(event) {
  console.log(event.target.value);
}
function onSubmit(event) {
  event.preventDefault();
  alert("Пользователь создан");
}
function onReset() {
  alert("Отменено");
}
export function Form() {
  return (
    <form onChange={onChange} onSubmit={onSubmit} onReset={onReset}>
      <input type={"text"} placeholder={"Username"} />
      <input type={"email"} placeholder={"Email"} />
      <input type={"password"} placeholder={"Password"} />
      <button type={"submit"}>SUBMIT</button>
      <button type={"reset"}>RESET</button>
    </form>
  );
}
