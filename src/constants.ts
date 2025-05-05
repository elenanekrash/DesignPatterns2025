// Регулярное выражение для поиска координатных групп вида (x, y, z)
export const POINT_GROUP_REGEX = /\(([^)]+)\)/g;

// Регулярное выражение для удаления скобок
export const REMOVE_PARENS_REGEX = /[()]/g;