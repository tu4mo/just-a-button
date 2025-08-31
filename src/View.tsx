import React, { Suspense } from "react";
import { useSnapshot } from "valtio";
import { state } from "./valtio";

const Button = React.lazy(
  () => import(/* webpackChunkName: "Button" */ "./Button"),
);

const View = () => {
  const snap = useSnapshot(state);

  return (
    <div
      style={{
        backgroundColor: snap.backgroundFlipped ? "#eee" : undefined,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 200ms ease-in-out",
      }}
    >
      <Suspense fallback="Loading…">
        <Button />
      </Suspense>
    </div>
  );
};

export { View };
