"use client";

import { useRouter } from "next/navigation";

export const View: React.FC = () => {
  const { replace } = useRouter();

  return (
    <div>
      없는 페이지임..
      <button type="button" onClick={() => replace("/")}>
        돌아가기
      </button>
    </div>
  );
};
