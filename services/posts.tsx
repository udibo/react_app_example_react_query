import { useContext, useEffect, useState } from "npm/react";
import {
  HttpError,
  HttpErrorOptions,
  isBrowser,
  isHttpError,
} from "x/udibo_react_app/mod.tsx";
import { useQuery } from "npm/@tanstack/react-query";

import { AppContext } from "../context.ts";
import { Post } from "../models/posts.ts";

const parseResponse = async (response: Response) => {
  const { status } = response;
  let json;
  try {
    json = await response.json();
  } catch (e) {
    throw new HttpError(status, "Invalid response");
  }
  if (response.status !== 200) throw new HttpError(status, json);
  return json;
};

export function getPosts() {
  const { data: posts } = useQuery<Post[]>(
    ["get"],
    async () => {
      const response = await fetch(`/api/blog/posts`);
      return parseResponse(response);
    },
  );

  return posts;
}

export function parsePostId(id?: string) {
  const parsedId = Number(id);
  if (isNaN(parsedId) || Math.floor(parsedId) !== parsedId || parsedId < 0) {
    throw new HttpError(400, "Invalid id");
  }
  return parsedId;
}

export function getPost(id: number) {
  const { data: post } = useQuery<Post>(
    ["get", id],
    async () => {
      const response = await fetch(`/api/blog/posts/${id}`);
      return parseResponse(response);
    },
  );

  return post;
}
