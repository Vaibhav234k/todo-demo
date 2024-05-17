"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { cn } from "../utils/cn";

let todoId = 0;

export function TodoForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodolist([...todoList, { id: (todoId = todoId + 1), item: input }]);
    console.log(input);
  };
  const [input, setInput] = useState("");
  const [todoList, setTodolist] = useState<any[]>([]);
  return (
    <div className="max-w-7xl w-full border-white border mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-slate-950">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to To-be app
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Each day I will accomplish one thing on my to list.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="grow">
            <Input
              id="firstname"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder="ex. Go to gym today"
              type="text"
            />
          </LabelInputContainer>
          <button
            className="flex-1 px-6 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Add
            <BottomGradient />
          </button>
        </div>
      </form>
      <ul className="bg-slate-950 text-neutral-300 w-full ">
        {todoList.map((todo) => (
          <li
            className="w-full flex flex-row justify-between rounded-md py-1 my-1"
            key={todo.id}
          >
            <div className="flex flex-row">
              <input
                type="checkbox"
                onChange={(e) => {
                  e.target.checked;
                }}
                className="mt-2 size-6"
              />
              <p className="ml-2 text-2xl">{todo.item}</p>
              {"  "}
            </div>
            <div className="flex flex-row gap-2">
              <button
                className="px-6 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                onClick={() => {
                  console.log(todo.id);
                  const editedTodo = prompt("Edit the todo:");
                  if (editedTodo !== null && editedTodo.trim() !== "") {
                    setTodolist(
                      todoList.map((todos) =>
                        todos.id === todo.id
                          ? { id: todo.id, item: editedTodo }
                          : todos
                      )
                    );
                  }
                }}
              >
                Edit
                <BottomGradient />
              </button>
              <button
                className="px-6 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                onClick={() => {
                  setTodolist(todoList.filter((a) => a.id !== todo.id));
                }}
              >
                Delete
                <BottomGradient />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
