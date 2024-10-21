import * as RdxDialog from '@radix-ui/react-dialog';
import { cn } from '../../app/utils/cn';
import { Cross2Icon } from '@radix-ui/react-icons';




interface ModalPrps {
    open: boolean,
    title: string,
    children: React.ReactNode,
    rigthAction?: React.ReactNode,
    onClose?(): void
}

export function Modal({ open, title, rigthAction, onClose,   children }: ModalPrps){
    return (
        <RdxDialog.Root open={ open } onOpenChange={onClose}>

        <RdxDialog.Portal>
          <RdxDialog.Overlay className={cn(
            'bg-black/80 fixed inset-0 z-50 backdrop-blur-sm',
            'data-[state=open]:animate-overlay-show'
          )} />
          <RdxDialog.Content className={cn(
            'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 space-y-10 bg-white rounded-2xl z-[51] shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[400px] outline-none',
            'data-[state=open]:animate-content-show',
          )}>

           <header className="h-12 flex items-center justify-between text-gray-800">

              <button
              className='h-12 w-12 outline-none flex items-center justify-center'
              onClick={onClose}
              >
                <Cross2Icon className='w-6 h-6'/>
              </button>

              <RdxDialog.Title className='text-lg tracking-[-1px] font-bold'>
                 { title }
              </RdxDialog.Title>

              <div className='h-12 w-12 flex items-center justify-center'>
                { rigthAction }
              </div>
           </header>

           <div>
             { children }
           </div>

          </RdxDialog.Content>
        </RdxDialog.Portal>
      </RdxDialog.Root>
    )
}



