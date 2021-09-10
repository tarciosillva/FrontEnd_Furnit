const data = new Date();

export const date = () => {
  if (data.getDate() <= 9 && data.getMonth() <= 9) {
    return `0${data.getDate()}/0${data.getMonth() + 1}/${data.getFullYear()}`;
  } else if (data.getDate() <= 9) {
    return `0${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  } else if (data.getMonth() <= 9) {
    return `${data.getDate()}/0${data.getMonth() + 1}/${data.getFullYear()}`;
  }
}