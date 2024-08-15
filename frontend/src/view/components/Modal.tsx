import * as Dialog from '@radix-ui/react-dialog';
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
        <Dialog.Root open={ open } onOpenChange={onClose}>

        <Dialog.Portal>
          <Dialog.Overlay className={cn(
            'bg-black/80 fixed inset-0 z-50 backdrop-blur-sm',
            'data-[state=open]:animate-overlay-show'
          )} />
          <Dialog.Content className={cn(
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

              <Dialog.Title className='text-lg tracking-[-1px] font-bold'>
                 { title }
              </Dialog.Title>

              <div className='h-12 w-12 flex items-center justify-center'>
                { rigthAction }
              </div>
           </header>

           <div>
             { children }
           </div>

          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
}



