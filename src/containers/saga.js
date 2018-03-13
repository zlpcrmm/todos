import { call, put, takeLatest } from 'redux-saga/effects'

import request from '../utils/request';
import {queryGithubDone, queryGithubError} from "../actions/index";

function* getRepos(action) {
    const requestURL = `https://api.github.com/users/${action.username}/repos?type=all&sort=updated`;
    try {
        const repos = yield call(request, requestURL);
        if (repos!=null&&repos.length>0){
            let res = '';
            repos.map((item,index)=>{
                res+=item.full_name+';'
            })
            yield put(queryGithubDone(res));
        }else {
            yield put(queryGithubDone('未在github上找到结果!'))
        }

    } catch (err) {
        yield put(queryGithubError(err));
    }
}

function* mySaga() {
    yield takeLatest("QUERY_ACTION", getRepos);
}

export default mySaga;