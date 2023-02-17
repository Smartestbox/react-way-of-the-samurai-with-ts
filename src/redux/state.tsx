type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}

type MessagesPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: any) => void
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let store: StoreType = {
    _state:  {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 2, message: 'Some message', likesCount: 9},
                {id: 2, message: 'I don\'t know what to say', likesCount: 5},
            ],
            newPostText: 'it-kamasutra.com'
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Dymich'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Viktor'},
                {id: 5, name: 'Valera'},
                {id: 6, name: 'Sasha'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your mood?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},
                {id: 6, message: 'Yo'},
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState () {
        return this._state
    },
    addPost () {

    },
    updateNewPostText (newText: string) {

    },
    subscribe(observer) {
        this.rerenderEntireTree()
    },
    dispath(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this.rerenderEntireTree(this._state)
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    },
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;

