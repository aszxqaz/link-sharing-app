export function useSnackbar() {
  const snackbar = useState<{ message: string; shown: boolean }>("snackbar");

  function showSnackbar(message: string) {
    snackbar.value.message = message;
    snackbar.value.shown = true;
  }

  return { showSnackbar };
}
