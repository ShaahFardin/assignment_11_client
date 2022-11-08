import { Label, Textarea } from 'flowbite-react';
import React from 'react';

const Comment = () => {
    return (
        <div>
            <div id="textarea">
                <div className="mb-2 block">
                    <Label
                        htmlFor="comment"
                    />
                </div>
                <Textarea
                    id="comment"
                    placeholder="Leave a comment..."
                    required={true}
                    rows={4}
                />
                <button className='text-start bg-blue-600 px-16 py-1 text-white font-semibold rounded-lg mt-10'>ADD</button>
            </div>
        </div>
    );
};

export default Comment;