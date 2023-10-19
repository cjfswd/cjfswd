import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"
import { Icons } from '@/components/icons'

export default function DialogDemo({ children, key }: { children?: React.ReactElement, key?: React.Key | null | undefined }) {
    return (
        <Dialog key={key}>
            <DialogTrigger asChild>
                {children ? children : <span key={key} className={cn(
                    "flex cursor-pointer items-center text-sm font-medium text-muted-foreground",
                )}>Contato</span>}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Contato</DialogTitle>
                    <DialogDescription>
                        <p>clique nas opções abaixo para abrir um chat diretamente comigo, pelo app escolhido.</p>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex flex-col gap-2 sm:flex-col sm:space-x-0">
                    <Link href='https://t.me/cjfswd' className="w-full" target="_blank" rel="noreferrer" prefetch={false}><Button className="flex h-full w-full flex-col ml:flex-row ml:gap-2"><Icons.telegram className="h-4" /><div>telegram</div><div className="hidden ml:block">-</div><div>Username: @cjfswd</div></Button></Link>
                    <Link href='https://discordapp.com/users/120199416597577732' className="w-full" target="_blank" rel="noreferrer" prefetch={false}><Button className="flex h-full w-full flex-col ml:flex-row ml:gap-2"><Icons.discord className="h-4" /><div>discord</div><div className="hidden ml:block">-</div><div>ID: 120199416597577732</div></Button></Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}