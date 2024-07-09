import { PromptList } from "@/features/prompts/pages/prompt_list";
import { AppLayout } from "./lay";


export default function Home() {
  return (
      <AppLayout >
        <PromptList />
      </AppLayout>
  );
}
