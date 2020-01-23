import * as React from 'react';

export const MainPage = () => {
  return <>Main Page</>;
};

export const ClientPage = () => {
  return <>Client Page</>;
};

export const LoginPage = () => {
  return <>Login Page</>;
};

export const AdminPage: React.FC = (props) => {
  const { children } = props;
  return (
    <>
      <div>Admin Page</div>
      <div>{children}</div>
    </>
  );
};

export const UsersPage = () => {
  return <>Users Page</>;
};

export const SettingsPage = () => {
  return <>Settings Page</>;
};

export const NotFound = () => {
  return <>404</>;
};
