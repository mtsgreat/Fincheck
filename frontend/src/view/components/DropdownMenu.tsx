import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react';
import { cn } from '../../app/utils/cn';


function DropdownMenuRoot({children}: {children: React.ReactNode}){
    return (
        <RdxDropdownMenu.Root>
            { children }
        </RdxDropdownMenu.Root>
    )
}


function DropdownMenuTrigger({children}: {children: React.ReactNode}){
    return (
        <RdxDropdownMenu.Trigger className='outline-none'>
            { children }
        </RdxDropdownMenu.Trigger>
    )
}



interface DropdownMenuContentProps {
    children: React.ReactNode,
    className?: string
}



function DropdownMenuContent({ children, className }: DropdownMenuContentProps){
    return (
        <RdxDropdownMenu.Portal>
            <RdxDropdownMenu.Content
            className={cn(
                'rounded-2xl p-2 bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]',
                className
            )}
            >
                { children }
            </RdxDropdownMenu.Content>
        </RdxDropdownMenu.Portal>
    )
}

interface DropdownMenuItemProps {
    children: React.ReactNode,
    className?: string
}

function DropdownMenuItem({ children, className }: DropdownMenuItemProps){
    return (

        <RdxDropdownMenu.Item
        className={cn(
            'min-h-[48px] outline-none flex items-center p-4 text-gray-800 text-sm hover:bg-gray-50 rounded-2xl transition-colors',
            className
        )}
        >
            { children }
         </RdxDropdownMenu.Item>

    )
}


export const DropdownMenu = {
    Root: DropdownMenuRoot,
    Trigger: DropdownMenuTrigger,
    Content: DropdownMenuContent,
    Item: DropdownMenuItem
}
