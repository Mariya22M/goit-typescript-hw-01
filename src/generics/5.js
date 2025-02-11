export var UserRole;
(function (UserRole) {
    UserRole["admin"] = "admin";
    UserRole["editor"] = "editor";
    UserRole["guest"] = "guest";
})(UserRole || (UserRole = {}));
const RoleDescription = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
};
console.log(RoleDescription[UserRole.admin]);
console.log(RoleDescription[UserRole.editor]);
console.log(RoleDescription[UserRole.guest]);
