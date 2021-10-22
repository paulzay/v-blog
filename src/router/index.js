import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "@/components/Admin/SignUp";
import Login from "@/components/Admin/Login";
import Users from "@/components/Admin/Users";
import UserDetails from "@/components/Admin/UserDetails";
import AddPost from "@/components/Admin/AddPost";
import Posts from "@/components/Admin/Posts";
import Post from "@/components/Admin/Post";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/admin/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/admin/users/:id",
    name: "UserDetails",
    component: UserDetails,
    props: true,
  },
  {
    path: "/admin/posts/new",
    name: "AddPost",
    component: AddPost,
  },
  {
    path: "/admin/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/:slug",
    name: "Post",
    component: Post,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
