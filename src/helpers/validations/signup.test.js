import { isEmail, isValidPassword, isValidUsername } from "./signup";

it("should test email validations", () => {
  expect(isEmail("juliushirwa@gmail.com")).toBe(true);
});

it("should test password validations", () => {
  expect(isValidPassword("Password123")).toBe(true);
});

it("should test username validations", () => {
  expect(isValidUsername("Username")).toBe(true);
});

it("should return false when email is invalid", () => {
  expect(isEmail("juliushirwagmail.com")).toBe(false);
});

it("should return false when password is invalid", () => {
  expect(isValidPassword("Passwor")).toBe(false);
});

it("should return false when password is invalid", () => {
  expect(isValidPassword("passwor")).toBe(false);
});

it("should return false when username is invalid", () => {
  expect(isValidUsername("Username&78")).toBe(false);
});
