const URL_BASE = "http://localhost:8080";

// APIS PARA USUARIOS
const URL_BASE_USER = `${URL_BASE}/users`;

export const URL_CREATE = `${URL_BASE_USER}/create`;
export const URL_UPDATE = `${URL_BASE_USER}/update`;
export const URL_DELETE = `${URL_BASE_USER}/delete`;
export const URL_VALIDATE_LOGIN = `${URL_BASE_USER}/validate`;

// APIS PARA MANGAS
const URL_BASE_MANGA = `${URL_BASE_USER}/mangas`;

export const URL_MANGA_FANTASY = `${URL_BASE_MANGA}/fantasy`;
export const URL_MANGA_ACTION = `${URL_BASE_MANGA}/action`;
export const URL_MANGA_HORROR = `${URL_BASE_MANGA}/horror`;
export const URL_MANGA_ROMANCE = `${URL_BASE_MANGA}/romance`;
export const URL_MANGA_COMEDY = `${URL_BASE_MANGA}/comedy`;

