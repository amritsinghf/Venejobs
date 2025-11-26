"use client";
import { useEffect } from "react";
import userApiStore from "../store/userStore";

export default function UserInit() {
  useEffect(() => {
    userApiStore.getState().fetchData();
  }, []);

  return null;
}