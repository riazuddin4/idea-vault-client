"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, ListBox, Modal, Surface, Select, TextField, TextArea, SelectTrigger, SelectValue, SelectIndicator, SelectPopover, ListBoxItem } from "@heroui/react";
import { BookPlus, Image as ImageIcon, DollarSign, Clock, List } from 'lucide-react';
import { BiEdit } from "react-icons/bi";

const CATEGORIES = ['Education', 'AI', 'Health', 'Tech'];

export function EditModal({ mongoidea }) {
    const { _id, IdeaTitle, ImageURL, Category, ShortDescription, DetailedDescription, Tags, EstimatedBudget, TargetAudience, ProblemStatement, ProposedSolution } = mongoidea;

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const mongoidea = Object.fromEntries(formData.entries())
        console.log(mongoidea)


        const {data} = await authClient.token();
        console.log("Auth token data in DeleteAlert:", data);
        // const {token} = await authClient.token();
        // console.log("Auth token data in DeleteAlert:", token);

        


        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ideas/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${data.token}`,
            },
            body: JSON.stringify(mongoidea)
        })

        const datas = await res.json()
        console.log(datas)
    }
    return (
        <Modal>
            {/* <Button variant="secondary">Open Contact Form</Button> */}

            <Button variant='outline' className='rounded-none '> <BiEdit /> Edit</Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-lg">
                        <Modal.CloseTrigger />
                        <Modal.Header>

                            <Modal.Heading>Edit Idea</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form
                                    onSubmit={onSubmit}
                                    className="p-10 space-y-8"
                                >
                                    <div className="grid grid-cols-1 gap-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="md:col-span-2 space-y-2">
                                                <label
                                                    htmlFor="title"
                                                    className="text-sm font-bold text-slate-700 ml-1"
                                                >
                                                    Ideas Title
                                                </label>
                                                <Input
                                                    id="title"
                                                    name='IdeaTitle'
                                                    defaultValue={IdeaTitle}
                                                    required
                                                    placeholder="e.g. Next.js 15 Masterclass"
                                                    className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                                                />
                                            </div>

                                            <div className="md:col-span-2 space-y-2">
                                                <label
                                                    htmlFor="description"
                                                    className="text-sm font-bold text-slate-700 ml-1"
                                                >
                                                    Description
                                                </label>
                                                <TextArea
                                                    id="description"
                                                    defaultValue={DetailedDescription}
                                                    name='DetailedDescription'
                                                    required
                                                    placeholder="What will students learn in this course?"
                                                    className="w-full h-32 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none resize-none"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="thumbnail"
                                                    className="text-sm font-bold text-slate-700 ml-1"
                                                >
                                                    Image URL
                                                </label>
                                                <Input
                                                    id="thumbnail"
                                                    name='ImageURL'
                                                    defaultValue={ImageURL}
                                                    required
                                                    type="url"
                                                    placeholder="https://images.unsplash.com/..."
                                                    startContent={<ImageIcon className="w-5 h-5 text-slate-400" />}
                                                    className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-slate-700 ml-1">Category</label>
                                                <Select
                                                    id="category"
                                                    name='Category'
                                                    defaultValue={Category}
                                                    required
                                                    placeholder="Select a category"
                                                    className="w-full"
                                                >
                                                    <SelectTrigger className="h-14 border-2 border-slate-200 hover:border-blue-600/50 data-[focus-within=true]:border-blue-600 rounded-2xl bg-white transition-all duration-300 flex items-center px-4 shadow-none outline-none group">
                                                        <div className="flex items-center gap-3 w-full">
                                                            <List className="w-5 h-5 text-slate-400 group-data-[focus-within=true]:text-blue-600 transition-colors" />
                                                            <SelectValue className="font-medium text-slate-600" />
                                                        </div>
                                                        <SelectIndicator className="ml-auto">
                                                            <div className="text-slate-400 group-data-[focus-within=true]:text-blue-600 transition-colors">
                                                                <List className="w-4 h-4" />
                                                            </div>
                                                        </SelectIndicator>
                                                    </SelectTrigger>
                                                    <SelectPopover className="bg-white border border-slate-200 shadow-2xl rounded-2xl p-2 mt-2">
                                                        <ListBox>
                                                            {CATEGORIES.map((cat) => (
                                                                <ListBoxItem
                                                                    key={cat}
                                                                    id={cat}
                                                                    className="px-4 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl cursor-pointer transition-colors font-medium"
                                                                >
                                                                    {cat}
                                                                </ListBoxItem>
                                                            ))}
                                                        </ListBox>
                                                    </SelectPopover>
                                                </Select>
                                            </div>

                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="price"
                                                    className="text-sm font-bold text-slate-700 ml-1"
                                                >
                                                    Price ($)
                                                </label>
                                                <Input
                                                    id="price"
                                                    name="EstimatedBudget"
                                                    defaultValue={EstimatedBudget}
                                                    required
                                                    type="number"
                                                    placeholder="0.00"
                                                    startContent={<DollarSign className="w-5 h-5 text-slate-400" />}

                                                    className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label
                                                    htmlFor="duration"
                                                    className="text-sm font-bold text-slate-700 ml-1"
                                                >
                                                    Target Audience
                                                </label>
                                                <Input
                                                    id="duration"
                                                    name="TargetAudience"
                                                    defaultValue={TargetAudience}
                                                    required
                                                    type="text"
                                                    placeholder="e.g. 12h 30m"
                                                    startContent={<Clock className="w-5 h-5 text-slate-400" />}

                                                    className="w-full h-14 border-2 border-slate-200 hover:border-blue-600/50 focus-within:border-blue-600 rounded-2xl bg-white transition-all duration-300 shadow-none"
                                                />
                                            </div>
                                        </div>


                                    </div>

                                    {/* Buttons */}

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Save</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}