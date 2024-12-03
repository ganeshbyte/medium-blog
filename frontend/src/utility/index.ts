export function getAuthToken() {
  const token = localStorage.getItem("token");
  return `Bearer ${token}`;
}

export function getAvatarIconName(authorName: string) {
  const fullName = authorName.toUpperCase().split(" ");

  let shortName: string;

  if (fullName.length > 1) {
    shortName = fullName[0][0] + fullName[1][0];
  } else {
    shortName = fullName[0][0];
  }
  return shortName;
}
