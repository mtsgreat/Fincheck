import React from "react";
import * as RdxSelect from "@radix-ui/react-select";

import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@radix-ui/react-icons";
import { cn } from "../../app/utils/cn";





export function Select(){
    return (
        <RdxSelect.Root>
		<RdxSelect.Trigger
            className={cn(
                'bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 transition-all outline-none text-left relative',
                // error && '!border-red-600',
                // className
            )}
			
		>
			<RdxSelect.Value />
			<RdxSelect.Icon className="absolute right-3">
				<ChevronDownIcon className="w-6 h-6 text-gray-800" />
			</RdxSelect.Icon>
		</RdxSelect.Trigger>

		<RdxSelect.Portal>
			<RdxSelect.Content className="z-[99] overflow-hidden bg-white rounded-2xl border-gray-100 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]">
				<RdxSelect.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800 cursor-default">
					<ChevronUpIcon />
				</RdxSelect.ScrollUpButton>
				<RdxSelect.Viewport className="p-2">
                        <RdxSelect.Item
                        value="Banana"
                        className="p-2 text-gray-800 text-sm data-[state=checked]:font-bold outline-none data-[highlighted]:bg-gray-100 cursor-pointer rounded-lg"
                    >
                        <RdxSelect.ItemText>Banana</RdxSelect.ItemText>
                    </RdxSelect.Item>

                    <RdxSelect.Item
                        value="Uva"
                        className="p-2 text-gray-800 text-sm data-[state=checked]:font-bold outline-none data-[highlighted]:bg-gray-100 cursor-pointer rounded-lg"
                    >
                        <RdxSelect.ItemText>Uva</RdxSelect.ItemText>
                    </RdxSelect.Item>


                    <RdxSelect.Item
                        value="Pera"
                        className="p-2 text-gray-800 text-sm data-[state=checked]:font-bold outline-none data-[highlighted]:bg-gray-100 cursor-pointer rounded-lg"
                    >
                        <RdxSelect.ItemText>Pera</RdxSelect.ItemText>
                    </RdxSelect.Item>

                    

                    
				</RdxSelect.Viewport>
				<RdxSelect.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800">
					<ChevronDownIcon />
				</RdxSelect.ScrollDownButton>
			</RdxSelect.Content>
		</RdxSelect.Portal>
	</RdxSelect.Root>
    )
}
