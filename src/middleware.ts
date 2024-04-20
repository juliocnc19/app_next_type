import withAuth from 'next-auth/middleware';
import { Routes } from './defitions/routesEnum';

export default withAuth({
  pages: {
    signIn:Routes.LOGIN,
    error:Routes.LOGIN
  },
});

export const config = {
  matcher: [
    "/dashboard"
  ],
};
