const { request, response } = require( 'express' );

const get = ( req = request, res = response ) => {

    const { id } = req.params;

    res.json( {
        source: 'get controller',
        id
    } );
}

const getAll = ( req = request, res = response ) => {

    const { count=0 } = req.query;

    res.json( {
        source: 'get all controller',
        users: [],
        count
    } );
}

const add = ( req = request, res = response ) => {

    const body = req.body;

    res.json( {
        source: 'add controller',
        body
    } );
}

const update = ( req = request, res = response ) => {
    
    const { id } = req.params;

    res.json( {
        source: 'update controller',
        id
    } );
}

const updatePartial = ( req = request, res = response ) => {
    
    const { id } = req.params;

    res.json( {
        source: 'update partial controller',
        id
    } );
}

const remove = ( req = request, res = response ) => {
    
    const { id } = req.params;

    res.json( {
        source: 'delete controller',
        id
    } );
}

module.exports = {
    get,
    getAll,
    add,
    update,
    updatePartial,
    remove
}