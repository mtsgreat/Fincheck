import { ExitIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "./DropdownMenu";



export function UserMenu(){
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
            <div
                className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center"
                >
                    <span className="text-sm tracking-[-0.5px] text-teal-600 font-medium">
                    MA
                    </span>
                </div>
            </DropdownMenu.Trigger>


              <DropdownMenu.Content className="w-32">
                <DropdownMenu.Item className="flex items-center justify-between" >
                    Sair
                    <ExitIcon className="w-4 h-4"/>
                </DropdownMenu.Item>
              </DropdownMenu.Content>

        </DropdownMenu.Root>
    )
}
